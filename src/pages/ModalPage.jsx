import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} secondary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>I am a children prop for Modal</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
        provident illo similique earum quisquam magnam, adipisci doloribus error
        tenetur dolor omnis voluptas. Perspiciatis sequi laborum consequuntur
        aspernatur rem ipsam delectus asperiores dolores repudiandae accusantium
        quia dolorum commodi, totam quas, officia blanditiis quibusdam,
        voluptates placeat excepturi iure vitae minus laboriosam soluta?
      </p>
    </div>
  );
}

export default ModalPage;
