import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Select,
  SelectItem,
  Textarea,
} from '@nextui-org/react'
import clsx from 'clsx'
import { SyntheticEvent } from 'react'

type CreateQuestionModalProps = {
  isOpen: boolean
  className?: string
  onClose: () => void
  onSubmit: () => void
}

function CreateQuestionModal({
  isOpen = true,
  className,
  onClose,
  onSubmit,
}: CreateQuestionModalProps) {
  const onFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault()

    onSubmit()
  }

  return (
    <Modal radius="none" size="full" isOpen={isOpen} onClose={onClose}>
      <form className={clsx(className)} onSubmit={onFormSubmit}>
        <ModalContent>
          <ModalBody className="py-12 px-8">
            <Input label="عنوان سوال" isRequired />

            <Textarea
              isRequired
              minRows={5}
              placeholder="متن سوال شما ..."
              className="mt-3"
            />

            <Select label="موضوع" isRequired className="mt-3">
              <SelectItem key={1} value={1}>آموزشی</SelectItem>
              <SelectItem key={2} value={2}>روانشناسی</SelectItem>
            </Select>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              variant="light"
              onClick={onClose}
            >
              بستن
            </Button>

            <Button type="submit" color="primary">
              ثبت
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  )
}

export default CreateQuestionModal
