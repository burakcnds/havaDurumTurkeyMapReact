import React, { useEffect, useState } from 'react'
import TurkeyMap from 'turkey-map-react';
function Havadurum() {
    const sehirler=["Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "Mersin", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
]
    const [sehir,setSehir] = useState("")
    const [bilgi,setBilgi] = useState()

    const key  = 'd6d3aff48929a46b797114e738234e41'
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${sehir}&appid=${key}&units=metric&lang=tr`

    function getApi(){
      fetch(api)
      .then(res => res.json())
      .then(data => setBilgi(data))
    }

    useEffect(()=>{
      if(sehir !== ''){
        getApi()
      }
        
    },[sehir])

    if(bilgi){
      console.log(bilgi);
    }

  return (
    <>
    
    <select className='form-select text-center w-50 d-block mx-auto mt-1' onChange={(e)=>setSehir(e.target.value)}>
      {
        sehirler.map((e,i)=>{
         return <option key={i}> {e} </option>
        })
      }
    </select>

   

    <TurkeyMap onClick={ ({ name }) => setSehir(name) } />

    {bilgi && (
  <div className='container w-50'>
    <div className="card m-auto p-0 mt-1">
      <h1> {bilgi.name} </h1>
   
    <div className='card-text'> Sıcaklık: {bilgi.main.temp} </div>
    <div className='card-text'> Hissedilen Sıcaklık: {bilgi.main.feels_like} </div>
    <div className='card-text'> Nem oranı: {bilgi.main.humidity} </div>
    <div className='card-text'> Nem oranı: {bilgi.weather[0].description} </div>
    </div>
  </div>
)}
    </>
  )
}

export default Havadurum