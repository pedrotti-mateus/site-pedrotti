export interface Vehicle {
  id: number
  brand: string
  model: string
  type: string
  price: number
  image: string
  views: number
}

export const vehiclesMock: Vehicle[] = [
  { id: 1, brand: "SEMI-REBOQUE", model: "GRANELEIRO", type: "CARRETA", price: 0, image: "https://images.unsplash.com/photo-1581078769378-e67bc682f840?w=500&h=400&fit=crop", views: 18 },
  { id: 2, brand: "SEMI-REBOQUE", model: "GRANELEIRO", type: "CARRETA", price: 54500, image: "https://images.unsplash.com/photo-1581078769378-e67bc682f840?w=500&h=400&fit=crop", views: 118 },
  { id: 3, brand: "SEMI-REBOQUE", model: "BAU SIDER", type: "CARRETA", price: 129900, image: "https://images.unsplash.com/photo-1581078769378-e67bc682f840?w=500&h=400&fit=crop", views: 92 },
  { id: 4, brand: "SEMI-REBOQUE", model: "GRANELEIRO", type: "CARRETA", price: 63500, image: "https://images.unsplash.com/photo-1581078769378-e67bc682f840?w=500&h=400&fit=crop", views: 112 },
  { id: 5, brand: "SEMI-REBOQUE", model: "GRANELEIRO", type: "CARRETA", price: 154900, image: "https://images.unsplash.com/photo-1581078769378-e67bc682f840?w=500&h=400&fit=crop", views: 173 },
  { id: 6, brand: "SEMI-REBOQUE", model: "BASCULANTE", type: "CARRETA", price: 0, image: "https://images.unsplash.com/photo-1581078769378-e67bc682f840?w=500&h=400&fit=crop", views: 2766 },
]