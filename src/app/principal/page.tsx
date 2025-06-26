'use client'

import React from 'react'
import * as S from './styles'
import { useTranslation } from 'next-i18next'

export default function Principal() {
  const { t, i18n } = useTranslation()

  const changeCurrentLanguage = (toLanguage: string) => {
    i18n.changeLanguage(toLanguage)
  }

  return (
    <S.Wrapper>
      <S.Button title="🇪🇸 ES" onClick={() => changeCurrentLanguage('es')}>
        🇪🇸 ES
      </S.Button>
      <S.Button title="🇺🇸 EN" onClick={() => changeCurrentLanguage('en')}>
        🇺🇸 EN
      </S.Button>
      <S.Button title="🇧🇷 PT" onClick={() => changeCurrentLanguage('pt-BR')}>
        🇧🇷 PT
      </S.Button>
      <S.Title>{t('language')}</S.Title>
      <S.Title>{t('i18next')}</S.Title>
      <S.Title>{t('eslint')}</S.Title>
      <S.Title>{t('styledComponet')}</S.Title>
    </S.Wrapper>
  )
}
