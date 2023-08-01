export const RenderClientMessage = ({state}) => {
  const {messageContent} = state;

  return (
    <div>{messageContent}</div>
  )
}