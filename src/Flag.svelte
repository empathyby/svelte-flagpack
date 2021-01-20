<script>
  import * as FlagPack from 'flagpack-core'

  export let code = 'NL'
  export let size = 'l'
  export let gradient = ''
  export let hasBorder = true
  export let hasDropShadow = false
  export let hasBorderRadius = true
  export let className

  const url = FlagPack.imageUrl(FlagPack.isoToCountryCode(code).toUpperCase(), size.toLowerCase())
</script>

<style global type="text/scss">
  @import './Flag.scss';
</style>

<div
  class={
    `flag
    ${gradient}
    size-${size}
    ${hasBorder ? 'border' : ''}
    ${hasDropShadow ? 'drop-shadow' : ''}
    ${hasBorderRadius ? 'border-radius' : ''}
    ${className ? className.replace(/\s\s+/g, ' ').trim() : ''}`
  }
>
  <img src={url.default || url} alt={`Flag of ${code}`}>
</div>
