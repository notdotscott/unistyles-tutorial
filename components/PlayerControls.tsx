import { IconSymbol } from '@/components/ui/IconSymbol'
import { useStore } from '@/store';
import { Pressable, View } from 'react-native'
import { StyleSheet, useUnistyles } from 'react-native-unistyles'

export const PlayerControls = () => {
  const { theme } = useUnistyles();
  const { preferredAccent } = useStore();
  const accent = theme.colors.accents[preferredAccent];

  return (
    <View style={styles.actions}>
      <Pressable>
        <IconSymbol name="backward.end.fill" size={40} color={accent} />
      </Pressable>
      <Pressable>
        <IconSymbol name="backward.fill" size={50} color={accent} />
      </Pressable>
      <Pressable>
        <IconSymbol name="play.circle.fill" size={100} color={accent} />
      </Pressable>
      <Pressable>
        <IconSymbol name="forward.fill" size={50} color={accent} />
      </Pressable>
      <Pressable>
        <IconSymbol name="forward.end.fill" size={40} color={accent} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create(theme => ({
  actions: {
    marginTop: theme.gap(2),
    flexDirection: 'row',
    gap: theme.gap(2),
    alignItems: 'center'
  }
}));
