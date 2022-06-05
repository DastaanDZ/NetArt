import React from 'react'
import product from '../../assests/images/product.png'
import './page2.css'

const Page2 = () => {
  return (
    <>
    <div className="page2">
    <div className="page2_details">
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
    </div>
    <div className="product_container"> 
        <img src={product} alt="" className='product'/>
    </div>
    <p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p>
    <hr className='line'></hr>
    <p className="page2_details">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
    <div className="line_para"> 
    <p className='line_detail'>CHEMICALS & PROCESS</p> <hr className='vertical'></hr> <p className='line_detail'>POWER</p> <hr className='vertical'></hr><p className='line_detail'>WATER & WASTE WATER</p> <hr className='vertical'></hr><p className='line_detail'>OILS & GAS</p><hr className='vertical'></hr> <p className='line_detail'>PHARMA</p><hr className='vertical'></hr> <p className='line_detail'>SUGARS & DISTILLERIES</p><hr className='vertical'></hr> <p className='line_detail'>PAPER & PULP</p><hr className='vertical'></hr><p className='line_detail'> MARINE & DEFENCE</p> <hr className='vertical'></hr><p className='line_detail'>METAL & MINING</p><hr className='vertical'></hr><p className='line_detail'>FOOD & BEVERAGE</p><hr className='vertical'></hr> <p className='line_detail'> PETROCHEMICAL & REFINERIES</p><hr className='vertical'></hr><p className='line_detail'>SOLAR</p>  <hr className='vertical'></hr><p className='line_detail'>BUILDING</p><hr className='vertical'></hr><p className='line_detail'> HVAC</p><hr className='vertical'></hr> <p className='line_detail'>FIRE FIGHTING</p><hr className='vertical'></hr> <p className='line_detail'>AGRICULTURE & RESIDENTIAL</p>
    </div>
    </div>
    </>
    )
}

export default Page2
