import React from 'react'

export default function Ingredient(props) {
  const { amount, unit, consistency, name, meta } = props
  
  const amountToFraction = function( amount ) {
    if ( parseFloat( amount ) === parseInt( amount ) ) {
      return amount;
    }
    const gcd = function(a, b) {
      if (b < 0.0000001) {
        return a;
      }
      return gcd(b, Math.floor(a % b));
    };
    let len = amount.toString().length - 2;
    let denominator = Math.pow(10, len);
    let numerator = amount * denominator;
    let divisor = gcd(numerator, denominator);
    numerator /= divisor;
    denominator /= divisor;
    let base = 0;

    if ( numerator > denominator ) {
      base = Math.floor( numerator / denominator );
      numerator -= base * denominator;
    }
    amount = Math.floor(numerator) + '/' + Math.floor(denominator);
    if ( base ) {
      amount = base + ' ' + amount;
    }
    return amount;
  };

  return (
    <>
      
      <div>{amountToFraction(amount)} {unit} {consistency} {name} {meta} </div>

    </>
  )
}
