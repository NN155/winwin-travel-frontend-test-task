import { useTranslation } from 'react-i18next'

import { useFilterStore } from '@/shared/store/FilterStore'
import { Button, ModalWindow } from '@/shared/ui'

const ConfirmationModal: React.FC = () => {
	const { t } = useTranslation('filter')

	const { currentModal, applyFilters, discardChanges } = useFilterStore()

	const isOpen = currentModal === 'confirmation'

	return (
		<ModalWindow
			isOpen={isOpen}
			onClose={discardChanges}
			title={t('ui.doYouWantToApplyNewFilter')}
		>
			<div className="flex justify-center items-center gap-8 mt-30">
				<Button
					theme="transparent"
					onClick={discardChanges}
					className="min-w-70"
				>
					{t('ui.useOldFilter')}
				</Button>
				<Button
					className="min-w-70"
					theme="primary"
					onClick={applyFilters}
				>
					{t('ui.applyNewFilter')}
				</Button>
			</div>
		</ModalWindow>
	)
}

export default ConfirmationModal
