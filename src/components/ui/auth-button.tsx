'use client';

import Link from 'next/link';
import { useAuth } from '@/app/auth/auth-context';
import { useRouter } from 'next/navigation';
import { ProfileDropdown } from './profile-dropdown';
import { Button } from './button';
import { LogIn } from 'lucide-react';

interface AuthButtonProps {
  user: any;
  loading: boolean;
}

export function AuthButton({ user, loading }: AuthButtonProps) {
  if (loading) {
    return (
      <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse" />
    );
  }

  if (!user) {
    return (
      <Button
        variant="outline"
        size="sm"
        asChild
      >
        <Link href="/auth/signin">
          Sign In
        </Link>
      </Button>
    );
  }

  return <ProfileDropdown user={user} />;
}