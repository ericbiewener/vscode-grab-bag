import fs from 'fs'

function foo() {
  return 7
}

const bar = () => 'oh yeah'

const baz = one => two => three => (
  <div onClick={four => 'foo'} className="hey" boolProp>
    yah
  </div>
)

const baz2 = one => two => three => {
  return (
    <div
      onClick={four => {
        return 'foo'
      }}
      className="hey"
      boolProp
    >
      yah
    </div>
  )
}

console.log(() => 1)
