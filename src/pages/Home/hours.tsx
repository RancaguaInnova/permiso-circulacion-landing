import React from 'react'
import './styles.css'

const Hours: React.FC = () => {
    const col1 = locations.slice(0, 5)
    const col2 = locations.slice(5, 10)
    const element = (location: any, idx: string) => (
        <div key={`1_${idx}`} className='location'>
            <h3>{location.name}</h3>
            {location.days.map((day: any, key: number) => (
                <div className='element-box' key={`${idx}_${key}`}>
                    <p className='element-date'>{day.date}</p>
                    <p className='element-hour'>{day.hour}</p>
                </div>
            ))}
        </div>
    )
    return (
        <section className='Hours text-left'>
            <div className='red-title'>
                <h2>HORARIOS Y PUNTOS DE ATENCIÓN</h2>
            </div>
            <div className='row mt-4'>
                <div className='col-md-6 col-xs-12 location-box'>
                    {col1.map((location, key) => element(location, `1_${key}`))}
                </div>
                <div className='col-md-6 col-xs-12 location-box'>
                    {col2.map((location, key) => element(location, `2_${key}`))}
                </div>
            </div>
        </section>
    )
}

export default Hours

const locations: any[] = [
    {
        name: 'EDIFICIO TOMAS GUAGLÉN',
        address: '',
        positionUrl: '',
        days: [
            {
                date: '2 al 13 de marzo',
                hour: '08:15 a 14:00 horas'
            },
            {
                date: '16 al 20 de marzo',
                hour: '08:15 a 17:30 horas (continuado)'
            },
            {
                date: '23 al 27 de marzo',
                hour: '08:15 a 19:00 horas (continuado)'
            },
            {
                date: '28 y 29 de marzo',
                hour: '09:00 a 14:00 horas'
            },
            {
                date: '30 y 31 de marzo',
                hour: '08:15 a 21:00 horas (continuado)'
            }
        ]
    },
    {
        name: 'JUMBO PORTAL RANCAGUA',
        address: '',
        positionUrl: '',
        days: [
            {
                date: '2 al 8 de marzo',
                hour: '(Jumbo  1) 10:00 a 14:00 / 15:00 a 20:00 horas'
            },
            {
                date: '9 al 15 de marzo',
                hour: '(Jumbo 1 y 2) 09:00 a 20:00 horas (continuado)'
            },
            {
                date: '16 al 22 de marzo',
                hour: '(Jumbo 1-2-3) 09:00 a 20:00 horas (continuado)'
            },
            {
                date: '23 al 31 de marzo',
                hour: '(Jumbo 1-2-3-4) 09:00 a 21:00 horas (continuado)'
            }
        ]
    },
    {
        name: 'CENTRO COMERCIAL KENNEDY',
        address: '',
        positionUrl: '',
        days: [
            {
                date: '16 al 22 de marzo',
                hour: '9:00 a 14:00 / 15:00 a 20:00 horas'
            },
            {
                date: '23 al 31 de marzo',
                hour: '09:00 a 14:00 / 15:00 a 21:00 horas'
            }
        ]
    },
    {
        name: 'LIDER RECREO',
        address: '',
        positionUrl: '',
        days: [
            {
                date: '2 al 22 de marzo',
                hour: '(módulo  1) 09:00 a 14:00 / 15:00 a 20:00 horas'
            },
            {
                date: '23 al 31 de marzo',
                hour: '(módulos 1 y 2) 09:00 a 21:00 horas (continuado)'
            }
        ]
    },
    {
        name: 'HOMECENTER',
        address: '',
        positionUrl: '',
        days: [
            {
                date: '16 al 22 de marzo',
                hour: '09:00 a 14:00 / 15:00 a 20:00 horas'
            },
            {
                date: '23 al 31 de marzo',
                hour: '09:00 a 14:00 / 15:00 a 21:00 horas'
            }
        ]
    },
    {
        name: 'CUGAT BAQUEDANO',
        address: '',
        positionUrl: '',
        days: [
            {
                date: '9 al 22 de marzo',
                hour: '(módulo 1) 09:00 a 14:00 / 15:00 a 20:00 horas'
            },
            {
                date: '23 al 31 de marzo',
                hour: '(módulo 1 y 2) 09:00 a 14:00 / 15:00 a 21:00 horas'
            }
        ]
    },
    {
        name: 'PLAZA DE LOS HÉROES',
        address: '',
        positionUrl: '',
        days: [
            {
                date: '2 al 22 de marzo',
                hour: '08:30 a 14:00 / 15:00 a 18:30 horas'
            },
            {
                date: '28 y 29 de marzo',
                hour: '09:00 a 14:00 horas'
            },
            {
                date: '23 al 31 de marzo',
                hour: '08:15 a 14:00 / 15:00 a 20:00 horas'
            }
        ]
    },
    {
        name: 'JUMBO MEMBRILLAR',
        address: '',
        positionUrl: '',
        days: [
            {
                date: '16 al 22 de marzo',
                hour: '09:00 a 14:00 / 15:00 a 20:00 horas'
            },
            {
                date: '23 al 31 de marzo',
                hour: '09:00 a 14:00 / 15:00 a 21:00 horas'
            }
        ]
    },
    {
        name: 'PLAZA AMÉRICA',
        address: '',
        positionUrl: '',
        days: [
            {
                date: '2 al 22 de marzo',
                hour: '08:30 a 14:00 / 15:00 a 18:30 horas'
            },
            {
                date: '23 al 31 de marzo',
                hour: '08:30 a 21:00 horas (continuado)'
            }
        ]
    },
    {
        name: 'LIDER CARRETERA',
        address: '',
        positionUrl: '',
        days: [
            {
                date: '16 al 22 de marzo',
                hour: '09:00 a 14:00 / 15:00 a 20:00 horas'
            },
            {
                date: '23 al 31 de marzo',
                hour: '09:00 a 14:00 / 15:00 a 21:00 horas'
            }
        ]
    }
]
