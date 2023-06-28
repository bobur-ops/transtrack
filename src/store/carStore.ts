import { create } from 'zustand'
import carsData from '../config/data.json'

export type CarType = {
  id: number
  driverName: string
  category: string
  location: {
    latitude: number
    longitude: number
  }
  contactNumber: string
}

interface ICarStore {
  cars: CarType[]
  filterCars: (val: String) => void
  resetFilter: () => void

  selectedCar: CarType
  setSelectedCar: (val: CarType) => void
}

export const useCarStore = create<ICarStore>(set => ({
  cars: carsData.vehicles,
  selectedCar: carsData.vehicles[0],

  setSelectedCar: val => set(state => ({ selectedCar: val })),

  filterCars: val =>
    set(state => ({
      cars: carsData.vehicles.filter(car => car.category === val),
    })),

  resetFilter: () => set(state => ({ cars: carsData.vehicles })),
}))
