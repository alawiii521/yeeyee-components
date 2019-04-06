import { useRef, useEffect } from 'react';

function Drawer(props) {
  const drawerRef = useRef(drawerRef);

  useEffect(() => {
    if (Boolean(props.open)) {
      drawerRef.current.setAttribute('open', '');
    } else {
      drawerRef.current.removeAttribute('open');
    }
  }, [props.open]);

  return (
    <yeeyee-drawer
      ref={drawerRef}
      align={props.align}
      offset-top={props.offsetTop}
    >
      {props.children}
    </yeeyee-drawer>
  );
}

export default Drawer;
