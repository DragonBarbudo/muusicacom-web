<script setup lang="ts">
import { appName, appDescription } from '~/constants'

useHead({
  title: appName,
  htmlAttrs: {
    lang: 'es-MX'
  },
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'theme-color',
      content: '#3b82f6'
    }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Muusica.com',
        url: 'https://muusica.com',
        logo: 'https://muusica.com/favicon.png',
        description: appDescription,
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Ciudad de México',
          addressCountry: 'MX'
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: '+52-55-5512-3456',
            contactType: 'customer service',
            email: 'contacto@muusica.com',
            availableLanguage: ['es', 'Spanish']
          },
          {
            '@type': 'ContactPoint',
            email: 'licencias@muusica.com',
            contactType: 'sales'
          },
          {
            '@type': 'ContactPoint',
            email: 'enterprise@muusica.com',
            contactType: 'sales',
            areaServed: 'MX'
          }
        ],
        sameAs: [
          'https://facebook.com/muusica',
          'https://instagram.com/muusicacom',
          'https://linkedin.com/company/muusica'
        ],
        areaServed: {
          '@type': 'Country',
          name: 'México'
        },
        founder: {
          '@type': 'Organization',
          name: 'Muusica.com'
        },
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'MXN',
          lowPrice: '175',
          highPrice: '1925',
          offerCount: '2'
        }
      })
    }
  ]
})
</script>

<template>
  <VitePwaManifest />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html,
body,
#__nuxt {
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  color-scheme: dark;
}
</style>
