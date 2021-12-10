# Simple IPRWC demo application

Application used as demoproject in module about programming in a web context for University of Applied Sciences Leiden.


## _Voorkennis:_

1. Installeren npm (node package manager)
2. Installeren Angular CLI

- npm install -g @angular/cli

1. Maak een nieuw Angular project aan genaamd &quot;iprwc-webshop&quot;

- ng new iprwc-webhop
- Kies voor angular routing (y)
- Kies je gewenste stylesheet format
- Controleer of het werkt metng serve

## Voeg Bootstrap toe aan het project:

1. npm install bootstrap@4 –save
2. Zorg dat het bootstrap grid systeem werkt in je project

- Importeer bootstrap.scss in ./src/styles.scss

## Maak een products module:

1. Maak een module aan genaamd &quot;products&quot;

- ng g m products
- Controleer of de module is aangemaakt

1. Maak een product model

- ng g class products/product --type=model

1. Maak een product service

- ng g s products

1. Maak een products component
2. Maak een product-list component
3. Maak een product-list-item component

- ng g c products
- ng g c products/product-list
- ng g c products/product-list/product-list-item

## Maak een shoppingcart module:

1. Maak een module genaamd &quot;shoppingcart&quot;

- ng g m shoppingcart

1. Maak een shoppingcart service

- ng g s shoppingcart

1. Maak een shoppingcart component
2. Maak een shoppingcart-list component
3. Maak een shoppingcart-list-item component

- ng g c shoppingcart
- ng g c shoppingcart/shoppingcart-list
- ng g c shoppingcart/shoppingcart-list/shoppingcart-list-item