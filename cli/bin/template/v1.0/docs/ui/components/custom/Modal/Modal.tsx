import React from 'react'
import styles from '../../components.module.scss'

interface ModalProps{
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode
}

const Modal = ({
    isOpen,
    onClose,
    children,
    ...rest
}: React.HTMLAttributes<HTMLDivElement> & ModalProps) => {
  return (
    <>
        {isOpen && (
            <>
                <div 
                    className={styles.overlay}
                    onClick={(e) => {
                        onClose()
                    }}
                >
                </div>
                <div className={styles.modalFlex}>
                    <div className={styles.modalContainer} {...rest}>
                        {children}
                    </div>
                </div>
            </>
        )}
    </>
  )
}

export default Modal