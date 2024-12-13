import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-item',
  imports: [CommonModule],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css',
})
export class ListItemComponent {
  products = [
    {
      id: 1,
      name: 'Apple iPhone 16 - 128 GB - White',
      description: 'Smartphone · Single SIM · 4G',
      image: '/phone.jpg',
      price: 800.0,
      instock: 10,
      discountprice: 400.0,
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 , 256GB,',
      description: 'Dual Sim, Titanium Black',
      image: '/samsung.jpg',
      price: 1000.0,
      instock: 10,
      discountprice: 400.0,
    },
    {
      id: 3,
      name: 'Samsung Galaxy Z Flip3 5g ',
      description: 'Smartphone · Cream, 128 GB',
      image: '/samsungflip.jpg',
      price: 1200.0,
      instock: 10,
      discountprice: 400.0,
    },
    {
      id: 4,
      name: 'Google Pixel 9-Porcelain, 256 GB  ',
      description: 'Smartphone · (12 GB RAM)',
      image: '/googlepixel.jpg',
      price: 800.0,
      instock: 10,
      discountprice: 400.0,
    },
    {
      id: 5,
      name: 'Google Pixel 6 – 5G Android Phone',
      description: 'Smartphone· dual sim ·Ultrawide Lens',
      image: '/googlepixel6.jpg',
      price: 400.0,
      instock: 10,
      discountprice: 400.0,
    },
    {
      id: 6,
      name: 'Apple iPhone 13 (512GB) - Blue',
      description: 'Smartphone · 6.1 Inches · 4K',
      image: '/iphone13.jpg',
      price: 460.0,
      instock: 10,
      discountprice: 400.0,
    },
    {
      id: 7,
      name: 'Logitech-Headphone',
      description: 'Wired with DTS X 7.1 Surround',
      image: '/logitech.jpg',
      price: 600.0,
      instock: 10,
      discountprice: 400.0,
    },
    {
      id: 8,
      name: 'Sony WH-CH520',
      description: 'Wireless,Bluetooth Mic,50hr Playtime ',
      image: '/sony.jpg',
      price: 600.0,
      instock: 10,
      discountprice: 400.0,
    },
    {
      id: 9,
      name: 'SONY PlayStation 4 Gold ',
      description: '500 Million Limited Edition(PS4) ',
      image: '/ps4.jpg',
      price: 800.0,
      instock: 10,
      discountprice: 400.0,
    },
    {
      id: 10,
      name: 'Beats Studio Buds +',
      description: 'Wireless Noise Cancelling Earbuds',
      image: '/beats.jpg',
      price: 1000.0,
      instock: 10,
      discountprice: 400.0,
    },
    {
      id: 11,
      name: 'JBL Tune Buds  Wireless ',
      description: 'TWS Earbuds with Mic, ANC Earbuds',
      image: '/jbl.jpg',
      price: 1200.0,
      instock: 10,
      discountprice: 400.0,
    },
    {
      id: 12,
      name: 'Boat Airdopes 201 ',
      description: 'True Wireless Earbuds',
      image: '/boat.jpg',
      price: 800.0,
      instock: 10,
      discountprice: 400.0,
    },
    {
      id: 13,
      name: 'Laptop Lenovo 2-in-1 IdeaPad',
      description: 'Core i7-150U/16GB/512GB ',
      image: '/lenovo.jpg',
      price: 400.0,
      instock: 10,
      discountprice: 400.0,
    },
    {
      id: 14,
      name: 'HP Victus Gaming Laptop 6 GB',
      description: '13th Gen i5/16GB RAM/ 512GB SSD',
      image: '/victus.jpg',
      price: 460.0,
      instock: 10,
      discountprice: 400.0,
    },
    {
      id: 15,
      name: 'ASUS X571',
      description: '16GB RAM, and Windows 10 Pro',
      image: '/asus.jpg',
      price: 600.0,
      instock: 10,
      discountprice: 400.0,
    },
    {
      id: 16,
      name: 'HP Pavilion 14-dv0511sa Laptop ',
      description: 'i3-1115G4 8GB RAM 256GB SSD 14',
      image: '/hp.jpg',
      price: 600.0,
      instock: 10,
      discountprice: 400.0,
    },
    {
      id: 17,
      name: 'boAt Xtend Smartwatch Gold-Black',
      description: 'with Alexa Built-in, 1.69” HD Display',
      image: '/iwatch.jpg',
      price: 800.0,
      instock: 10,
      discountprice: 400.0,
    },
    {
      id: 18,
      name: 'noise watch Alpha AMOLED',
      description: '1.78 Display, Gesture Control, AOD',
      image: '/noise.jpg',
      price: 1000.0,
      instock: 10,
      discountprice: 400.0,
    },
    {
      id: 19,
      name: 'APPLE Watch SE GPS 44mm ',
      description: 'Alluminio color Sport Band regular',
      image: '/watch.jpg',
      price: 1200.0,
      instock: 10,
      discountprice: 400.0,
    },
    {
      id: 20,
      name: 'Apple Watch Series 10 GPS ',
      description:
        '46mm Retina OLED Display, Silver ',
      image: '/i2watch.jpg',
      price: 800.0,
      instock: 10,
      discountprice: 400.0,
    },
  ];
  
  
  constructor() {
  
  }
}
