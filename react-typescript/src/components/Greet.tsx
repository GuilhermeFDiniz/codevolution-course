type GreetProps = {
  name: string
  messageCount: number
  isLoggedIn: boolean
}

const Greet = (props: GreetProps) => {
  return (
    <div>
      {
        props.isLoggedIn ? `Welcome ${props.name} ${props.messageCount}! You have ${props.messageCount} unread messages.` : 'Welcome Guest'
      }
    </div>
  )
}

export default Greet
