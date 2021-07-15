import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { Redirect } from 'react-router-dom';
import { useFormik } from 'formik';


const Dialogs = (props) => {
  const { dialogs, messages } = props.dialogsPage;

  const onSubmitMessage = (values) => {
    props.sendMessage(values.messageText);
  };

  const dialogsElements = dialogs.map(d =>
    <DialogItem name={d.name} id={d.id} key={d.id} />
  );

  const messagesElements = messages.map(m =>
    <Message message={m.message} id={m.id} key={m.id} />
  );

  if (!props.isAuth) {
    return <Redirect to='/login' />
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
      <AddMessageForm onSubmit={onSubmitMessage} />
    </div>
  )
};


const AddMessageForm = (props) => {
  const formik = useFormik({
    initialValues: {
      messageText: ''
    },
    onSubmit: props.onSubmit
  });

  return (
    <form onSubmit={formik.handleSubmit} >
      <div>
        <textarea
          name="messageText"
          placeholder="Type your message"
          className={s.input}
          onChange={formik.handleChange}
          value={formik.values.messageText} />
      </div>
      <div>
        <button
          type="submit"
          className={s.addBtn}>Send</button>
      </div>
    </form>
  );
};

export default Dialogs;