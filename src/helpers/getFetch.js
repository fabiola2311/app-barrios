import React from 'react';

const productos = [
    { id: 1, categoria: 'servicios', nombre: 'consultoria', precio: 800, foto: "https://www.osas.com/media/2180/erp-business-consulting.jpg" },
    { id: 2, categoria: 'servicios', nombre: 'celulas', precio: 1000, foto: "https://www.osas.com/media/2180/erp-business-consulting.jpg" },
    { id: 2, categoria: 'servicios', nombre: 'staffing', precio: 900, foto: "https://www.osas.com/media/2180/erp-business-consulting.jpg" },
];

const getFetch = new Promise((resolve, reject) => {
    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    } else {
        reject('400 Error')
    }
})

export default getFetch;