import { onMounted } from 'vue'

type Option = {
  el: string
}

export default function (option: Option): Promise<{ baseURL: string }> {
  return new Promise((resolve) => {
    onMounted(() => {
      const img: HTMLImageElement = document.querySelector(option.el) as HTMLImageElement
      console.log('useBase64', img)
      img.onload = () => {
        resolve({
          baseURL: doBase64(img)
        })
      }
    })

    const doBase64 = (el: HTMLImageElement) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = el.width
      canvas.height = el.height
      ctx?.drawImage(el, 0, 0, canvas.width, canvas.height)
      return canvas.toDataURL('image/jpeg')
    }
  })
}
