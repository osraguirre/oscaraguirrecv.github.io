import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { Api } from '../../services/api';
import { MainInfo } from '../../models/mainInfo';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class HomeComponent implements OnInit {
  private readonly api = inject(Api);
  private readonly cdr = inject(ChangeDetectorRef);

  // Mostramos SIEMPRE el primer perfil recibido desde el backend.
  profile: MainInfo | null = null;

  constructor() {
    console.log('🏠 HomeComponent: Constructor ejecutado -', new Date().toISOString());
  }

  ngOnInit(): void {
    const startTime = performance.now();
    console.log('🏠 HomeComponent: ngOnInit ejecutado -', new Date().toISOString());
    
    this.api.getMainData().subscribe({
      next: (profilesResponse) => {
        const apiResponseTime = performance.now();
        console.log('✅ HomeComponent: Respuesta del backend recibida en', (apiResponseTime - startTime).toFixed(2), 'ms -', new Date().toISOString());
        console.log('✅ HomeComponent: Respuesta del backend:', profilesResponse);
        
        // Manejar tanto array directo como objeto con propiedad value
        let profiles: MainInfo[] = [];
        if (Array.isArray(profilesResponse)) {
          profiles = profilesResponse;
        } else if (profilesResponse && 'value' in profilesResponse && Array.isArray(profilesResponse.value)) {
          profiles = profilesResponse.value;
        }
        
        this.profile = profiles.length > 0 ? profiles[0] : null;
        console.log('👤 HomeComponent: Profile asignado:', this.profile, '- Tiempo total:', (performance.now() - startTime).toFixed(2), 'ms');
        
        // Usar markForCheck para mejor rendimiento
        this.cdr.markForCheck();
        console.log('🔄 HomeComponent: Change detection marcado -', new Date().toISOString());
      },
      error: (err) => {
        console.error('❌ HomeComponent: Error en API:', err, '- Tiempo total:', (performance.now() - startTime).toFixed(2), 'ms');
        this.profile = null;
        this.cdr.markForCheck();
      },
    });
  }

  get contactInfo() {
    return this.profile?.contactInfo?.[0];
  }

  get whatsappUrl(): string {
    const phone = this.contactInfo?.phoneNumber;
    if (!phone) return '';
    const digits = phone.replace(/\D/g, '');
    return `https://wa.me/${digits}`;
  }
}
