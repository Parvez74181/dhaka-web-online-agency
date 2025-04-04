"use client";
import { cn } from "@/lib/utils";
import { Button as ButtonUI, ModalHeader } from "@heroui/react";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/react";
import ContactForm from "../ContactForm";
import { useEffect } from "react";

type ButtonProps = {
  text?: string;
  isLoading?: boolean;
  disabled?: boolean;
  showDialog?: boolean;

  className?: string;
  children?: React.ReactNode;
  radius?: "full" | "none" | "sm" | "md" | "lg";
  size?: "sm" | "md" | "lg";
  dialogType?: "contact_form";
  type?: "submit" | "button" | "reset";
  id?: string;
  onPress?: () => void;
};

const Button = ({
  text,
  radius = "full",
  isLoading = false,
  className,
  children,
  size,
  disabled = false,
  showDialog = false,
  dialogType,
  type = "button",
  id,
  onPress,
}: ButtonProps) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const handlePress = () => {
    if (showDialog) {
      onOpen();
    }
  };

  return (
    <>
      <ButtonUI
        id={id}
        onPress={onPress || handlePress}
        isLoading={isLoading}
        radius={radius}
        className={cn("*:text-black shadow-lg px-0 w-36", className)}
        size={size || "md"}
        disabled={disabled}
        type={type}
      >
        <div className="w-full h-full flex items-center justify-center gap-1">{children || text}</div>
      </ButtonUI>

      {showDialog && (
        <Modal
          backdrop="blur"
          scrollBehavior="inside"
          className="overflow-y-auto"
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          classNames={{
            body: "py-6",

            base: "bg-dark-1 !max-w-[100%] w-[95%] md:w-[70%] lg:w-[60%] border border-white overflow-hidden",

            footer: "border-t-[1px] border-[#292f46]",
            closeButton: "hover:bg-white/5 active:bg-white/10",
          }}
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.3, ease: "easeOut" },
              },
              exit: {
                y: -20,
                opacity: 0,
                transition: { duration: 0.2, ease: "easeIn" },
              },
            },
          }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody>{dialogType === "contact_form" && <ContactForm />}</ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Button;
