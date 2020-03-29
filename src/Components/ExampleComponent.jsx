import React, { useState, useCallback } from 'react';

const ExampleComponent = ({ name = 'John Smith' }) => {
  const [thing, setThing] = useState(false);
  const onThing = useCallback(() => {
    setThing(true);
  }, [setThing]);
	return <div onClick={onThing}>{thing ? 'Clicked!' : name}</div>;
};

export default ExampleComponent;
