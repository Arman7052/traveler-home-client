// Add a room
export const addRoom = async roomData => {
    const response = await fetch(`http://localhost:7052/rooms`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(roomData),
    })
  
    const data = await response.json()
    return data
  }
  
  // Get all rooms
  export const getAllRooms = async () => {
    const response = await fetch(`http://localhost:7052/rooms`)
    const data = await response.json()
    return data
  }
  
  //get filtered rooms for hosts
  export const getRooms = async email => {
    const response = await fetch(`http://localhost:7052/rooms/${email}`)
    const data = await response.json()
    return data
  }
  
  // Get single room
  export const getRoom = async id => {
    const response = await fetch(`http://localhost:7052/room/${id}`)
    const data = await response.json()
    return data
  }
  
  // Delete a room
  export const deleteRoom = async id => {
    const response = await fetch(`http://localhost:7052/rooms/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    })
    const result = await response.json()
    return result
  }
  