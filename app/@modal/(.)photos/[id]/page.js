import { Modal } from './modal';

export default function PhotoModal({
  params: { id: photoId },
}) {
  return <Modal>{photoId}</Modal>;
}
