export type Contacts = {
  telegram: string
  eitta?: string
  email?: string
}

export type Mentor = {
  id: number
  name: string
  role: string
  photo: string
  contacts: Contacts
  expertise: string[]
}
