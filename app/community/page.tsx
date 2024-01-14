'use client'

import { useState } from 'react'
import { Button } from '@nextui-org/react'
import QuestionCard from './components/QuestionCard'
import CreateQuestionModal from './components/CreateQuestionModal'
import { useRouter } from 'next/navigation'

function Community() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const onQuestionSubmit = () => {
    router.push('/community/1')
  }

  return (
    <div className="flex flex-col">
      <QuestionCard className="p-6" />
      <QuestionCard className="border-t-1 p-6" />
      <QuestionCard className="border-t-1 p-6" />

      <CreateQuestionModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSubmit={onQuestionSubmit}
      />

      <Button
        radius="none"
        color="primary"
        className="fixed bottom-6 left-6"
        onClick={openModal}
      >
        سوال جدید
      </Button>
    </div>
  )
}

export default Community
