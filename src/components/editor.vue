<template>
  <div id="editor">
    <ol class="tabs">
      <li>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-credentials_icon"></use>
				</svg>
      </li>
			<li>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-bag"></use>
				</svg>
      </li>
			<li>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-book"></use>
				</svg>
      </li>
			<li>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-project"></use>
				</svg>
      </li>
			<li>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-icongroup05"></use>
				</svg>
      </li>
			<li>
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-phone"></use>
				</svg>
      </li>
    </ol>
    <ol class="pannels">
      <li>tab{1}</li>
			<li>tab{2}</li>
			<li>tab{3}</li>
			<li>tab{4}</li>
			<li>tab{5}</li>
			<li>tab{6}</li>
    </ol>
  </div>
</template>


<style lang="less">
.icon {
  width: 2em;
  height: 2em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#editor {
	border: 1px solid red;
	

	ol {
		list-style: none;
	}
}
</style>
