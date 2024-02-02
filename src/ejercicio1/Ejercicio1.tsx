import { useState } from 'react'
import React from 'react'
import { Button, Text, View } from 'react-native'

export const Ejercicio1 = () => {

  // Inicializa el estado con un arreglo de números
  const [numeros, setNumeros] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(num => num as number))
  const [pares, setPares] = useState<number[]>([])
  const [impares, setImpares] = useState<number[]>([])

  // Función para clasificar los números en pares e impares
  const clasificarNumeros = () => {
    setPares([])
    setImpares([])

    // Iterar sobre el arreglo de números
    for (let i = 0; i < numeros.length; i++) {
      // Usar el método push en lugar de setState para agregar números al arreglo
      if (numeros[i] % 2 === 0) {
        pares.push(numeros[i])
      } else {
        impares.push(numeros[i])
      }
    }

    // Actualizar el estado con los nuevos arreglos de pares e impares
    setPares(pares)
    setImpares(impares)
  }

  return (
    <View>
      <Text>Números originales:</Text>
      <Text>{numeros.join(', ')}</Text>
      <Text>Números pares:</Text>
      <Text>{pares.join(', ')}</Text>
      <Text>Números impares:</Text>
      <Text>{impares.join(', ')}</Text>
      <Button title="Clasificar números" onPress={clasificarNumeros} />
    </View>
  )
}