import i18next from 'i18next'

export interface FilterOption {
	id: string
	label: string
}

export interface FilterSectionData {
	title: string
	category: string // Додано поле category
	options: FilterOption[]
	columns?: number
}

export const getFilterSectionsData = (): FilterSectionData[] => [
	{
		title: i18next.t('filter:sections.preliminaryFilter'),
		category: 'preliminary',
		options: [
			{
				id: 'distance1km',
				label: i18next.t('filter:preliminary.distanceToCenter', { distance: 1 })
			},
			{
				id: 'distance3km',
				label: i18next.t('filter:preliminary.distanceToCenter', { distance: 3 })
			},
			{
				id: 'guestRating',
				label: i18next.t('filter:preliminary.guestRating', { rating: 9 })
			},
			{
				id: '5stars',
				label: i18next.t('filter:preliminary.starsCount', { count: 5 })
			},
			{ id: 'hotels', label: i18next.t('filter:preliminary.hotels') },
			{
				id: 'breakfastIncluded',
				label: i18next.t('filter:preliminary.breakfastIncluded')
			}
		],
		columns: 3
	},
	{
		title: i18next.t('filter:sections.popularFilters'),
		category: 'popular',
		options: [
			{
				id: '5stars',
				label: i18next.t('filter:preliminary.starsCount', { count: 5 })
			},
			{
				id: '4stars',
				label: i18next.t('filter:preliminary.starsCount', { count: 4 })
			},
			{
				id: 'breakfastIncluded2',
				label: i18next.t('filter:preliminary.breakfastIncluded')
			},
			{
				id: 'distance3km',
				label: i18next.t('filter:preliminary.distanceToCenter', { distance: 3 })
			},
			{
				id: 'distance3km2',
				label: i18next.t('filter:preliminary.distanceToCenter', { distance: 3 })
			},
			{
				id: 'guestRating2',
				label: i18next.t('filter:preliminary.guestRating', { rating: 8 })
			}
		],
		columns: 3
	},
	{
		title: i18next.t('filter:sections.amenitiesAccommodation'),
		category: 'amenities',
		options: [
			{
				id: 'transferFromHotel',
				label: i18next.t('filter:amenities.transferFromHotel')
			},
			{
				id: 'roundClockReception',
				label: i18next.t('filter:amenities.roundClockReception')
			},
			{ id: 'earlyCheckIn', label: i18next.t('filter:amenities.earlyCheckIn') },
			{ id: 'lateCheckIn', label: i18next.t('filter:amenities.lateCheckIn') },
			{ id: 'petsAllowed', label: i18next.t('filter:amenities.petsAllowed') },
			{ id: 'parking', label: i18next.t('filter:amenities.parking') },
			{ id: 'breakfast', label: i18next.t('filter:amenities.breakfast') },
			{ id: 'restaurant', label: i18next.t('filter:amenities.restaurant') },
			{ id: 'swimmingPool', label: i18next.t('filter:amenities.swimmingPool') },
			{ id: 'airConditioning', label: i18next.t('filter:amenities.spa') },
			{
				id: 'gymFitnessRoom',
				label: i18next.t('filter:amenities.gymFitnessRoom')
			},
			{
				id: 'conferenceRooms',
				label: i18next.t('filter:amenities.conferenceRooms')
			},
			{ id: 'smokingArea', label: i18next.t('filter:amenities.smokingArea') },
			{
				id: 'childrensPlayground',
				label: i18next.t('filter:amenities.childrensPlayground')
			},
			{ id: 'internet', label: i18next.t('filter:amenities.internet') },
			{ id: 'spa', label: i18next.t('filter:amenities.security') },
			{ id: 'lift', label: i18next.t('filter:amenities.lift') },
			{
				id: 'ecoResponsibility',
				label: i18next.t('filter:amenities.ecoResponsibility')
			}
		],
		columns: 3
	},
	{
		title: i18next.t('filter:sections.amenitiesDisabilities'),
		category: 'accessibility',
		options: [
			{
				id: 'entranceWithoutSteps',
				label: i18next.t('filter:accessibility.entranceWithoutSteps')
			},
			{
				id: 'entrance81cmWide',
				label: i18next.t('filter:accessibility.entrance81cmWide')
			},
			{ id: 'parking', label: i18next.t('filter:accessibility.parking') },
			{
				id: 'availabilityRamp',
				label: i18next.t('filter:accessibility.availabilityRamp')
			},
			{ id: 'lift', label: i18next.t('filter:amenities.lift') },
			{ id: 'handrails', label: i18next.t('filter:accessibility.handrails') }
		],
		columns: 3
	},
	{
		title: i18next.t('filter:sections.roomFacilities'),
		category: 'roomFacilities',
		options: [
			{ id: 'bath', label: i18next.t('filter:roomFacilitiesItems.bath') },
			{ id: 'shower', label: i18next.t('filter:roomFacilitiesItems.shower') },
			{
				id: 'coffeeMachine',
				label: i18next.t('filter:roomFacilitiesItems.coffeeMachine')
			},
			{ id: 'kettle', label: i18next.t('filter:roomFacilitiesItems.kettle') },
			{ id: 'fridge', label: i18next.t('filter:roomFacilitiesItems.fridge') },
			{ id: 'kitchen', label: i18next.t('filter:roomFacilitiesItems.kitchen') },
			{
				id: 'airConditioning',
				label: i18next.t('filter:roomFacilitiesItems.airConditioning')
			},
			{ id: 'iron', label: i18next.t('filter:roomFacilitiesItems.iron') },
			{
				id: 'internet',
				label: i18next.t('filter:roomFacilitiesItems.internet')
			},
			{
				id: 'workplace',
				label: i18next.t('filter:roomFacilitiesItems.workplace')
			},
			{
				id: 'underfloorHeating',
				label: i18next.t('filter:roomFacilitiesItems.underfloorHeating')
			},
			{ id: 'pets', label: i18next.t('filter:roomFacilitiesItems.pets') },
			{ id: 'babyBed', label: i18next.t('filter:roomFacilitiesItems.babyBed') },
			{ id: 'balcony', label: i18next.t('filter:roomFacilitiesItems.balcony') }
		],
		columns: 3
	},
	{
		title: i18next.t('filter:sections.roomFacilitiesDisabilities'),
		category: 'roomAccessibility',
		options: [
			{
				id: 'mainDoorEntrance81cm',
				label: i18next.t('filter:accessibilityRoom.mainDoorEntrance81cm')
			},
			{
				id: 'interiorDoors81cm',
				label: i18next.t('filter:accessibilityRoom.interiorDoors81cm')
			},
			{
				id: 'absenceSteps',
				label: i18next.t('filter:accessibilityRoom.absenceSteps')
			},
			{
				id: 'handrailToilet',
				label: i18next.t('filter:accessibilityRoom.handrailToilet')
			},
			{
				id: 'handrailShower',
				label: i18next.t('filter:accessibilityRoom.handrailShower')
			},
			{
				id: 'bathShowerChair',
				label: i18next.t('filter:accessibilityRoom.bathShowerChair')
			},
			{
				id: 'barrierFreeShower',
				label: i18next.t('filter:accessibilityRoom.barrierFreeShower')
			},
			{
				id: 'lowWashbasin',
				label: i18next.t('filter:accessibilityRoom.lowWashbasin')
			},
			{
				id: 'highToiletBowl',
				label: i18next.t('filter:accessibilityRoom.highToiletBowl')
			},
			{
				id: 'instructionsBraille',
				label: i18next.t('filter:accessibilityRoom.instructionsBraille')
			},
			{
				id: 'emergencyCard',
				label: i18next.t('filter:accessibilityRoom.emergencyCard')
			},
			{
				id: 'emergencyBedside',
				label: i18next.t('filter:accessibilityRoom.emergencyBedside')
			}
		],
		columns: 3
	},
	{
		title: i18next.t('filter:sections.nutrition'),
		category: 'nutrition',
		options: [
			{
				id: 'roomWithoutMeals',
				label: i18next.t('filter:nutrition.roomWithoutMeals')
			},
			{
				id: 'breakfastOnly',
				label: i18next.t('filter:nutrition.breakfastIncluded')
			},
			{
				id: 'breakfastAndDinner',
				label: i18next.t('filter:nutrition.breakfastAndDinner')
			},
			{
				id: 'breakfastLunchDinner',
				label: i18next.t('filter:nutrition.breakfastLunchDinner')
			},
			{ id: 'allInclusive', label: i18next.t('filter:nutrition.allInclusive') },
			{
				id: 'ultraAllInclusive',
				label: i18next.t('filter:nutrition.ultraAllInclusive')
			}
		],
		columns: 3
	},
	{
		title: i18next.t('filter:sections.reservationCancellation'),
		category: 'cancellation',
		options: [
			{
				id: 'freeCancellationBeforeCheckIn',
				label: i18next.t(
					'filter:reservationCancellation.freeCancellationBeforeCheckIn'
				)
			},
			{
				id: 'freeCancellationUpTo3Days',
				label: i18next.t(
					'filter:reservationCancellation.freeCancellationUpTo3Days'
				)
			},
			{
				id: 'freeCancellationOneWeek',
				label: i18next.t(
					'filter:reservationCancellation.freeCancellationOneWeek'
				)
			},
			{
				id: 'noPossibilityCancellation',
				label: i18next.t(
					'filter:reservationCancellation.noPossibilityCancellation'
				)
			}
		],
		columns: 2
	},
	{
		title: i18next.t('filter:sections.prepayment'),
		category: 'prepayment',
		options: [
			{
				id: 'bookingWithoutCreditCard',
				label: i18next.t('filter:prepayment.bookingWithoutCreditCard')
			},
			{
				id: 'bookingWithoutPrepayment',
				label: i18next.t('filter:prepayment.bookingWithoutPrepayment')
			},
			{
				id: 'partialPrepayment',
				label: i18next.t('filter:prepayment.partialPrepayment')
			},
			{
				id: 'fullPrepayment',
				label: i18next.t('filter:prepayment.fullPrepayment')
			}
		],
		columns: 2
	},
	{
		title: i18next.t('filter:sections.formPayment'),
		category: 'payment',
		options: [
			{
				id: 'paymentInCash',
				label: i18next.t('filter:formPayment.paymentInCash')
			},
			{
				id: 'paymentByCard',
				label: i18next.t('filter:formPayment.paymentByCard')
			}
		],
		columns: 1
	},
	{
		title: i18next.t('filter:sections.specialOffers'),
		category: 'offers',
		options: [
			{
				id: 'discounts50',
				label: i18next.t('filter:specialOffers.discounts50')
			},
			{ id: 'hotOffers', label: i18next.t('filter:specialOffers.hotOffers') },
			{
				id: 'cheapOptionsRelocation',
				label: i18next.t('filter:specialOffers.cheapOptionsRelocation')
			}
		],
		columns: 3
	}
]
