import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AddModal = ({selectedPost,show,onHide}) => {
  return (
    <div
    className={`modal ${show} ${onHide}`}
    style={{ display: 'block', position: 'initial' }}
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
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
  )
}

export default AddModal
