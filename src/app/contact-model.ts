export interface ContactModel {
  gender: string,
  name: nameObj,
  location: locationObj,
  email: string,
  login: loginObj,
  dob: dobObj,
  registered: registeredObj,
  phone: string,
  cell: string,
  id: idObj,
  picture: pictureObj,
  nat: string
}  

interface nameObj {
  title: string,
  first: string,
  last: string,
}

interface locationObj {
  street: streetObj,
  city: string,
  state: string,
  country: string,
  postcode: string,
  coordinates: coordinateObj,
  timezone: timezoneObj
}

interface streetObj {
  number: number,
  name: string
}

interface coordinateObj {
  latitude: string,
  longitude: string
}

interface timezoneObj {
  offset: string,
  description: string
}

interface loginObj {
  uuid: string,
  username: string,
  password: string,
  salt: string,
  md5: string,
  sha1: string,
  sha256: string
}

interface dobObj {
  date: string,
  age: string
}

interface registeredObj {
  date: string,
  age: number
}

interface idObj {
  name: string,
  value: string
}

interface pictureObj {
  large: string,
  medium: string,
  thumbnail: string
}
