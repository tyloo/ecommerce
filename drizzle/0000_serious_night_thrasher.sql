CREATE TYPE "public"."gender" AS ENUM('male', 'female');--> statement-breakpoint
CREATE TYPE "public"."type" AS ENUM('category', 'default', 'type', 'size');--> statement-breakpoint
CREATE TABLE "collections" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar NOT NULL,
	"description" text,
	"slug" varchar NOT NULL,
	"gender" "gender" DEFAULT 'male' NOT NULL,
	"type" "type" DEFAULT 'default' NOT NULL,
	"image" varchar NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "collections_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE INDEX "Collection_slug_idx" ON "collections" USING btree ("slug");--> statement-breakpoint
CREATE INDEX "Collection_gender_idx" ON "collections" USING btree ("gender");--> statement-breakpoint
CREATE INDEX "Collection_type_idx" ON "collections" USING btree ("type");