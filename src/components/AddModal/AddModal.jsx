import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddModal = ({selectedPost,show,onHide}) => {
    console.log(show)
  return (
    <Modal
    show={show} onHide={onHide} centered
  >
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>{selectedPost ? selectedPost.title : ''}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{selectedPost ? selectedPost.body : ''}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </Modal>
  )
}

export default AddModal
