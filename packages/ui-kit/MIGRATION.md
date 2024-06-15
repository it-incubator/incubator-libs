# Migration

<br/>

## v2 ➡️ v3

### Breaking changes

#### `Card` component has been reworked.

- `Card` component is now built from `Card`, `CardHeader`, `CardTitle` and `CardContent` components.
- Each part of the card also accepts all the props of the corresponding HTML element.

##### Migration steps:
- Locate the `Card` component in your codebase.
- Replace the `title` prop with the `CardTitle` component:

```tsx
// before
<Card title={title}>
  <div className={s.calendarWrapper}>
    <GitHubCalendar
      colorScheme={isDarkTheme ? 'dark' : 'light'}
      theme={theme}
      username={user.github || ''}
    />
  </div>
</Card>

// after
<Card>
  <CardHeader>
    <CardTitle>{title}</CardTitle>
  </CardHeader>
  <CardContent>
    <div className={s.calendarWrapper}>
      <GitHubCalendar
        colorScheme={isDarkTheme ? 'dark' : 'light'}
        theme={theme}
        username={user.github || ''}
      />
    </div>
  </CardContent>
</Card>
```
- Move the contents of `contentClassName` prop to the `CardContent` `className` prop:

```tsx
// before
<Card className={s.container} contentClassName={s.content} title={'Статус CV'}>
    <CvStepper isLoading={isLoading} mentorStatus={cv?.mentorStatus} status={cv?.status} />
</Card>

// after
<Card className={s.container}>
  <CardHeader>
    <CardTitle>Статус CV</CardTitle>
  </CardHeader>
    <CardContent className={s.content}>
        <CvStepper isLoading={isLoading} mentorStatus={cv?.mentorStatus} status={cv?.status} />
    </CardContent>
</Card>
```

- Move the contents of `iconComponent` prop to the `CardHeader` as a child:

```tsx
// before
<Card
  contentClassName={s.contentWrapper}
  iconComponent={<StepTooltip isDone={isDone} />}
  title={'Оплата'}
>
  <PayBlock />
</Card>

// after
<Card className={s.container}>
  <CardHeader>
    <StepTooltip isDone={isDone} />
    <CardTitle>Оплата</CardTitle>
  </CardHeader>
  <CardContent className={s.contentWrapper}>
    <PayBlock />
  </CardContent>
</Card>
```
