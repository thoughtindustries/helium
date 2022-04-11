# `@thoughtindustries/testimonial`

> The Testimonial component allows users to create a formal statement to commend the value of the product.

Each testimonial contains the following:

- Quote
- User Name
- User Description
- Background Color
- Background Image
- Text Color
- Alignment

## Import component

```
import { Testimonial } from '@thoughtindustries/testimonial';
```

## Usage

```
# Testimonials
<TestimonialMultiCarousel textColor='black' desktopColumnCount={1}>
  <TestimonialMultiCarousel.Item
    quote='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    username='Marcus Cicero'
    description='Arpinum, Italy'
    backgroundColor='#b92525'
    textColor='#000000'
    alignment='Center'
    asset=''
  />
  <TestimonialMultiCarousel.Item
    quote='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    username='Marcus Cicero'
    description='Arpinum, Italy'
    backgroundColor='#b92525'
    textColor='#000000'
    alignment='Left'
    asset=''
  />
  <TestimonialMultiCarousel.Item
    quote='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    username='Marcus Cicero'
    description='Arpinum, Italy'
    backgroundColor='#b92525'
    textColor='#000000'
    alignment='Right'
    asset=''
  />
</TestimonialMultiCarousel>
```
