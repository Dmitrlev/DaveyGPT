export const RenderDavidMessage = ({state}) => {

  const {messageContent} = state;

  return (
    <div>{messageContent}</div>
  )
}