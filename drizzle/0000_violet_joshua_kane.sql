CREATE TYPE "public"."color" AS ENUM('primary', 'white');--> statement-breakpoint
CREATE TABLE "collections" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"description" text,
	"slug" varchar NOT NULL,
	"image" varchar NOT NULL,
	"color" "color" DEFAULT 'primary' NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "collections_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE INDEX "Collection_slug_idx" ON "collections" USING btree ("slug");