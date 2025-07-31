import {MapPin, Clock, Phone, Mail} from 'lucide-react'

export const CONTACTS = {
  location: {
    heading: 'Our Address',
    icon: MapPin,
    items: [
      {
        link: 'https://maps.app.goo.gl/7JznEHWYrwBRKdnC8',
        text: 'House No: 1, Block: B Banasree, Main Road, Rampura, Dhaka - 1219',
      },
    ],
  },
  time: {
    heading: 'Hours of Operation',
    icon: Clock,
    items: [
      {
        link: 'https://maps.app.goo.gl/7JznEHWYrwBRKdnC8',
        text: 'Mon - Fri: 9.00am to 5.00pm',
      },
    ],
  },
  tel: {
    heading: 'Phone',
    icon: Phone,
    items: [
      {
        link: 'tel:+8801310333444',
        text: '+8801310333444',
      },
      {
        link: 'tel:+8801885841489',
        text: '+8801885841489',
      },
    ],
  },
  mail: {
    heading: 'E-mail',
    icon: Mail,
    items: [
      {
        link: 'mailto:info@arenawebsecurity.net',
        text: 'info@arenawebsecurity.net',
      },
    ],
  },
}
