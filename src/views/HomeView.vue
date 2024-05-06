<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import Button from 'primevue/button'
import MegaMenu from 'primevue/megamenu'
import Avatar from 'primevue/avatar'
import Image from 'primevue/image'

const router = useRouter()

const login = () => {
  router.push('/signin')
}

const items = ref([
  {
    label: 'TESLA',
    root: true,
    items: [
      [
        {
          items: [
            {
              image:
                'https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/78196678-1635-4c42-8601-73cc6b24b8eb/0d8d466f-dd46-4770-825c-7832d2e9121b.png',
              subtext: 'Model 3'
            }
          ]
        }
      ],
      [
        {
          items: [
            {
              image:
                'https://d2ivfcfbdvj3sm.cloudfront.net/7fc965ab77efe6e0fa62e4ca1ea7673bb25f43560a1e3d8e88cb10/stills_0640_png/MY2021/15271/15271_st0640_116.png',
              subtext: 'Model S'
            }
          ]
        }
      ],
      [
        {
          items: [
            {
              image:
                'https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/909cd004-1eb1-46a3-b3d5-f7eca4175d23/a4e9535e-20e5-4838-a1ff-790f651a37b8.png',
              subtext: 'Model X'
            }
          ]
        }
      ],
      [
        {
          items: [
            { label: 'Iventory' },
            { label: 'Used Cars' },
            { label: 'Demo Drive' },
            { label: 'Trade-in' },
            { label: 'Compare' }
          ]
        }
      ]
    ]
  },
  {
    label: 'Energy',
    root: true,
    items: [
      [
        {
          items: [
            {
              image:
                'https://www.calstatesolar.com/wp-content/uploads/2020/07/tesla-power-wall.png',
              subtext: 'Powerwall'
            }
          ]
        }
      ],
      [
        {
          items: [
            {
              image:
                'https://sunpowerca.com/nubrand/wp-content/uploads/2019/07/equinox-powerwall.png',
              subtext: 'Solar Panels'
            }
          ]
        }
      ],
      [
        {
          items: [
            {
              image:
                'https://www.sungiftsolar.co.uk/wp-content/uploads/2018/02/Powerpack-system-product-image.png',
              subtext: 'Megapack'
            }
          ]
        }
      ],
      [
        {
          items: [
            { label: 'Schedule a Concultation' },
            { label: 'Why Solar' },
            { label: 'Incentives' },
            { label: 'Support' },
            { label: 'Partner with Tesla' }
          ]
        }
      ]
    ]
  },
  {
    label: 'Charging',
    root: true,
    items: [
      [
        {
          items: [
            {
              image: 'https://m.media-amazon.com/images/I/511Qiy+TTDL.jpg',
              subtext: 'Charging'
            }
          ]
        }
      ],
      [
        {
          items: [
            {
              image:
                'https://wsolar.shop/1164-large_default/tesla-wall-connector-type-2-charger.jpg',
              subtext: 'Home Charging'
            }
          ]
        }
      ],
      [
        {
          items: [
            {
              image:
                'https://www.shutterstock.com/pixelsquid/assets_v2/256/2561747555562034668/jpeg-600/G03.jpg',
              subtext: 'Supercharging'
            }
          ]
        }
      ],
      [
        {
          items: [
            { label: 'Help Me Charge' },
            { label: 'Charging Calculator' },
            { label: 'Charging With NACS' },
            { label: 'Supercharger Voting' },
            { label: 'Host a Supercharger' }
          ]
        }
      ]
    ]
  },
  {
    label: 'Shop',
    root: true,
    items: [
      [
        {
          items: [
            {
              image:
                'https://wsolar.shop/1164-large_default/tesla-wall-connector-type-2-charger.jpg'
            }
          ]
        }
      ],
      [
        {
          items: [
            {
              image: 'https://i.postimg.cc/RCJgqcfR/tesla-model-x-cyclone-wheel.png'
            }
          ]
        }
      ],
      [
        {
          items: [
            {
              image:
                'https://d1w8c6s6gmwlek.b-cdn.net/trendyteeshop.com/products/331/945/33194524.png'
            }
          ]
        }
      ],
      [
        {
          items: [{ label: 'Charging' }, { label: 'Vehicle Accessories' }, { label: 'Lifestyle' }]
        }
      ]
    ]
  }
])
</script>

<template>
  <div class="card" style="position: fixed; width: 99%; top: 0; z-index: 35">
    <MegaMenu :model="items" class="p-2 surface-0">
      <template #start>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/800px-Tesla_T_symbol.svg.png"
          alt="Image"
          width="50"
        />
      </template>
      <template #item="{ item }">
        <a
          v-if="item.root"
          v-ripple
          class="flex align-items-center cursor-pointer px-3 py-2 overflow-hidden relative font-semibold text-lg uppercase"
          style="border-radius: 2rem"
        >
          <span class="ml-2">{{ item.label }}</span>
        </a>
        <a v-else-if="!item.image" class="flex align-items-center p-1 cursor-pointer mb-2 gap-1">
          <span class="inline-flex flex-column gap-0">
            <span class="font-medium font-italic text-lg text-700">{{ item.label }}</span>
          </span>
        </a>
        <div v-else>
          <span>{{ item.subtext }}</span>
          <div class="flex align-items-center gap-3 cursor-pointer">
            <img alt="megamenu-demo" :src="item.image" class="h-12 w-8" />
          </div>
        </div>
      </template>
      <template #end>
        <Button @click="login" label="Login" class="mr-2" />
        <Avatar
          image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
          shape="circle"
        />
      </template>
    </MegaMenu>
  </div>
  <br />
  <br />
  <div class="video-wrapper">
    <vue-plyr>
      <div
        data-plyr-provider="youtube"
        data-plyr-embed-id="https://www.youtube.com/watch?v=krQKnhMwxn4"
      ></div>
    </vue-plyr>
  </div>
</template>

<style scoped>
.video-wrapper {
  width: 100%;
  height: 80%;
}
</style>


