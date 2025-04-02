import Button from "../UI/Button";
import Modal from "../UI/Dialog";

interface RemoveProductModalProps {
  isOpen: boolean;
  close: () => void;
  onConfirm: () => void;
}

const RemoveProductModal = ({ isOpen, close, onConfirm }: RemoveProductModalProps) => {
  return (
    <Modal 
      isOpen={isOpen}
      closeDialog={close}  
    >
      <div className="p-2">
        <h2 className="text-2xl font-bold text-gray-700 mb-3">Remove Product</h2>
        
        <div className="space-y-4 text-gray-500 font-semibold">
            <p>This action cannot be undone, and all product data will be permanently removed. Click "Delete" to confirm or "Cancel" to keep this product.</p>
            <div className="flex items-center space-x-3">
            <Button 
                onClick={onConfirm}
                className="bg-red-500 text-white hover:bg-red-600 rounded-md px-4 py-2"
            >
                Delete
            </Button>
            <Button 
                onClick={close}
                className="bg-gray-300 text-black hover:bg-gray-400 rounded-md px-4 py-2"
            >
                Cancel
            </Button>
            </div>
        </div>
      </div>
    </Modal>
  );
};

export default RemoveProductModal;