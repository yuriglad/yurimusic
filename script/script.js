document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const customer = document.getElementById('customer');
    const freelancer = document.getElementById('freelancer');

    const blockCustomer = document.getElementById('block-customer');
    const blockFreelance = document.getElementById('block-freelancer');
    const blockChoice = document.getElementById('block-choice');
    const btnExit = document.getElementById('btn-exit');

    customer.addEventListener('click', () => {
        blockCustomer.style.display = 'block';
        blockChoice.style.display = 'none';
        btnExit.style.display = 'block';
    });

    freelancer.addEventListener('click', () => {
        blockFreelance.style.display = 'block';
        blockChoice.style.display = 'none';
        btnExit.style.display = 'block';
    });

    
})
