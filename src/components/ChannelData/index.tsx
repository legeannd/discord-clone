import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);  

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage 
            key={n}
            author="Gean Lucas"
            date="22/06/2020"
            content="Hoje não é meu aniversário"
          />
        ))}

        <ChannelMessage 
          author="Diego Fernandes"
          date="22/06/2020"
          content={
            <>
              <Mention>@Gean Lucas</Mention>, me carrega no lol e no cs de novo por favor?
            </>
          }
          hasMention
          isBot
        />
        
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre"/>
        <InputIcon />
      </InputWrapper>    
    </Container>
  );
};

export default ChannelData;