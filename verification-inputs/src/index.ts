const form = document.querySelector('[name="verify"]') as HTMLFormElement
const inputs = form.querySelectorAll('.inputs input') as NodeListOf<HTMLInputElement>

const handleInput = (e: Event) => {
  const input = e.target as HTMLInputElement
  const nextSibling = input.nextElementSibling as HTMLInputElement
  const inputValue = input.value

  if (nextSibling && inputValue) {
    nextSibling.focus()
  }
}

const handlePaste = (e: ClipboardEvent) => {
  const paste = e.clipboardData!.getData('text')
  inputs.forEach((input, index) => input.value = paste[index]! || '')
}

form.addEventListener('input', handleInput)
inputs[0].addEventListener('paste', handlePaste)
