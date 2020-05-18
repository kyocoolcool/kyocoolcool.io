---
template: ContactPage
slug: contact
title: Contact Page
featuredImage: 'https://i.imgur.com/bZJPJKy.jpg'
subtitle: This is the contact page subtitle.
address: 'Taipei, Taiwan'
phone: 0910 123 456
email: kyocoolcool@hotmail.com
locations:
  - lat: '-27.9654732'
    lng: '153.2432449'
    mapLink: ''
meta:
  description: This is a meta description.
  title: Contact Page
---

# Example contact form

This form is setup to use Netlify's form handling:

- the form action is set to the current absolute url: `action: '/contact/'`
- a name attribute is sent with the form's data `'form-name': 'Contact'`
- netlify data attributes are added to the form `data-netlify data-netlify-honeypot`

Find out more in the [Netlify Docs](https://www.netlify.com/docs/form-handling/).
