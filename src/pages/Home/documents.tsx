import React from 'react'
import './styles.css'

const Documents: React.FC = () => {
    return (
        <section className='documents text-left'>
            <div className='red-title'>
                <h2>ANTECEDENTES A PRESENTAR</h2>
            </div>
            <div className='row mt-4'>
                <div className='col-md-12 location-box'>
                    <h3>EDIFICIO TOMAS GUAGLÉN</h3>
                    <p>1. Permiso de Circulación pago total año anterior.</p>
                    <p>2. Seguro Obligatorio de Accidentes Personales (SOAP).</p>
                    <p>3. Copia Revisión Técnica y Análisis de Gases o copia Homologación Vigente.</p>
                    <p>
                        4. Cambio de propietario o modificación alguna de características del vehiculo, deberá presentar
                        Certificado de Dominio (emitido por el registro civil).
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Documents
