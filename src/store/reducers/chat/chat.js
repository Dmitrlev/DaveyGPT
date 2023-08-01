import {createSlice} from "@reduxjs/toolkit";
import {getTime} from "../../../parsing/getTime";
import * as uuid from "uuid";
import styles from "../../../components/screens/ChatScreen/ChatMain/MessagesBlock/MessagesBlock.module.css";

const initialState = {
  data: [
    {
      chatName: 'test1chat',
      chatId: 1,
      chatValue: '',
      chatMessages: [
        {
          messageId: uuid.v4(),
          messageContent: 'sagesBlock = ({dataThisChat}) => {\n' +
            '\n' +
            '  return (\n' +
            '    <div className={styles.container}>\n' +
            '      <div className={styles.wrapper}>\n' +
            '        {dataThisChat?.chatMessages?.map(message => {\n' +
            '          console.log(message.messageSender)\n' +
            '          return (\n' +
            '            <div\n' +
            '              className={\n' +
            '              `${styles[\'wrapper-message\']} ` +\n' +
            '              `${message.messageSender === "DAVID" ? \n' +
            '                styles[\'wrapper-message-DAVID\'] \n' +
            '                : \n' +
            '                styles[\'wrapper-message-CLIENT\']}`\n' +
            '              }\n' +
            '            >\n' +
            '              {\n' +
            '                message.messageSender === "DAVID" ?\n' +
            '                  <RenderDavidMessage',
          messageSender: 'DAVID',
          messageError: false,
          messageTime: String(getTime()),
          messageRead: false,
        },
        {
          messageId: uuid.v4(),
          messageContent: 'sagesBlock = ({dataThisChat}) => {\n' +
            '\n' +
            '  return (\n' +
            '    <div className={styles.container}>\n' +
            '      <div className={styles.wrapper}>\n' +
            '        {dataThisChat?.chatMessages?.map(message => {\n' +
            '          console.log(message.messageSender)\n' +
            '          return (\n' +
            '            <div\n' +
            '              className={\n' +
            '              `${styles[\'wrapper-message\']} ` +\n' +
            '              `${message.messageSender === "DAVID" ? \n' +
            '                styles[\'wrapper-message-DAVID\'] \n' +
            '                : \n' +
            '                styles[\'wrapper-message-CLIENT\']}`\n' +
            '              }\n' +
            '            >\n' +
            '              {\n' +
            '                message.messageSender === "DAVID" ?\n' +
            '                  <RenderDavidMessage',
          messageSender: 'CLIENT',
          messageError: false,
          messageTime: String(getTime()),
          messageRead: false,
        }
      ],
      chatLoader: false,
      chatFixed: false,
      chatPrint: false,
    }
  ],
};

const Chat = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChat (state, action) {
      state.data = action.payload;
    },
    addNewChat (state, action) {
      const { chatName } = action.payload;
      state.data.unshift({
        chatName,
        chatId: state.data.length,
        chatValue: '',
        chatMessages: [],
        chatLoader: false,
        chatFixed: false,
        chatPrint: false,
      });
    },
    deleteChat (state, action) {
      const { chatId } = action.payload;
      const chatIndex = state.data.findIndex(chat => chat.chatId === chatId);
      if (chatIndex !== -1) {
        state.data.splice(chatIndex, 1);
      }
    },
    setChatValue (state, action) {
      const { chatValue, chatId } = action.payload;
      const chatIndex = state.data.findIndex(chat => chat.chatId === chatId);
      if(chatIndex !== -1) {
        state.data[chatIndex].chatValue = chatValue;
      }
    },
    setChatLoader (state, action) {
      const { chatLoader, chatId } = action.payload;
      const chatIndex = state.data.findIndex(chat => chat.chatId === chatId);
      if(chatIndex !== -1) {
        state.data[chatIndex].chatLoader = chatLoader;
      }
    },
    setChatFixed (state, action) {
      const { chatFixed, chatId } = action.payload;
      const chatIndex = state.data.findIndex(chat => chat.chatId === chatId);
      if(chatIndex !== -1) {
        state.data[chatIndex].chatFixed = chatFixed;
      }
    },
    setChatPrint (state, action) {
      const { chatPrint, chatId } = action.payload;
      console.log(chatPrint)
      const chatIndex = state.data.findIndex(chat => chat.chatId === chatId);
      if(chatIndex !== -1) {
        state.data[chatIndex].chatPrint = chatPrint;
      }
    },
    addNewMessage (state, action) {
      const { chatId, messageContent, messageSender, messageError } = action.payload;
      const chatIndex = state.data.findIndex(chat => chat.chatId === chatId);
      if (chatIndex !== -1) {
        const newMessage = {
          messageId: uuid.v4(),
          messageContent: messageContent.trim(),
          messageSender,
          messageError,
          messageTime: String(getTime()),
          messageRead: false,
        };
        state.data[chatIndex].chatMessages.push(newMessage);
        const chat = state.data.splice(chatIndex, 1)[0];
        state.data.unshift(chat);
      }
    },
    deleteMessage (state, action) {
      const { chatId, messageId } = action.payload;
      const chatIndex = state.data.findIndex(chat => chat.chatId === chatId);
      if(chatIndex !== -1) {
        const messageIndex = state.data[chatIndex].chatMessages.findIndex(message => message.messageId === messageId);
        if (messageIndex !== -1) {
          state.data[chatIndex].chatMessages.splice(messageIndex, 1);
        }
      }
    },
    setMessageError (state, action) {
      const { chatId, messageId, messageError } = action.payload;
      const chatIndex = state.data.findIndex(chat => chat.chatId === chatId);
      if(chatIndex !== -1) {
        const messageIndex = state.data[chatIndex].chatMessages.findIndex(message => message.messageId === messageId);
        if (messageIndex !== -1) {
          state.data[chatIndex].chatMessages[messageIndex].messageError = messageError;
        }
      }
    },
    setMessageRead (state, action) {
      const { chatId, messageId, messageRead } = action.payload;
      const chatIndex = state.data.findIndex(chat => chat.chatId === chatId);
      if(chatIndex !== -1) {
        const messageIndex = state.data[chatIndex].chatMessages.findIndex(message => message.messageId === messageId);
        if (messageIndex !== -1) {
          state.data[chatIndex].chatMessages[messageIndex].messageRead = messageRead;
        }
      }
    }
  }
});

export const {
  setChat,
  addNewChat,
  deleteChat,
  setChatValue,
  setChatLoader,
  setChatFixed,
  setChatPrint,
  addNewMessage,
  deleteMessage,
  setMessageError,
  setMessageRead,
} = Chat.actions;

export default Chat.reducer;


// if (messageSender === "CLIENT") soundNotificationActivate(soundFile).then(() =>  null);
// if (messageSender === "DAVID") soundNotificationActivate(soundFile2).then(() =>  null);
// import {Audio} from "expo-av";
// import soundFile from "../../../assets/sounds/telegram-soundin.mp3";
// import soundFile2 from "../../../assets/sounds/Sound_17216.mp3";
// const soundNotificationActivate = async (mp3) => {
//   const { sound } = await Audio.Sound.createAsync(mp3);
//   await sound.playAsync();
//   return sound
// };


