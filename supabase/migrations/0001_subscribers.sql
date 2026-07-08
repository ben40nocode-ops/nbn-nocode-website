-- Table des abonnés NBN IA (espace client + Stripe).
-- À exécuter dans le projet Supabase PERSO de Benjamin :
--   Dashboard Supabase → SQL Editor → coller → Run.
-- Accès uniquement côté serveur via la clé service_role (RLS activée, aucune policy anon).

create table if not exists public.subscribers (
  id                     uuid primary key default gen_random_uuid(),
  user_id                text unique,                 -- id utilisateur Clerk (null tant que non lié)
  email                  text not null,
  plan                   text,                        -- core | business | fullstack
  stripe_subscription_id text,
  stripe_customer_id     text,
  status                 text not null default 'invited'
                           check (status in ('invited','active','cancelled','past_due')),
  created_at             date not null default current_date,
  updated_at             timestamptz not null default now()
);

create index if not exists subscribers_user_id_idx   on public.subscribers (user_id);
create index if not exists subscribers_email_idx     on public.subscribers (email);
create index if not exists subscribers_stripe_sub_idx on public.subscribers (stripe_subscription_id);

-- RLS : verrouillée. Le serveur utilise service_role (qui contourne la RLS).
-- Aucune policy pour anon/authenticated -> table inaccessible depuis le navigateur.
alter table public.subscribers enable row level security;

-- Met à jour updated_at automatiquement à chaque modification.
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists subscribers_set_updated_at on public.subscribers;
create trigger subscribers_set_updated_at
  before update on public.subscribers
  for each row execute function public.set_updated_at();
